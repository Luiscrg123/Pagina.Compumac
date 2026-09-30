(function () {
  var WHATSAPP = '51938246236';

  // Lunes a viernes 9:00-20:00, sabado 9:00-14:00, domingo cerrado (minutos desde medianoche, hora de Lima)
  var SCHEDULE = { 0: null, 1: [540, 1200], 2: [540, 1200], 3: [540, 1200], 4: [540, 1200], 5: [540, 1200], 6: [540, 840] };
  var DAY_NAMES = ['el domingo', 'el lunes', 'el martes', 'el miércoles', 'el jueves', 'el viernes', 'el sábado'];

  var DEVICES = {
    impresora: {
      label: 'Impresora',
      problems: ['No imprime o sale en blanco', 'Atasco o no jala el papel', 'Rayas, manchas o faltan colores', 'Luces parpadeando o error', 'Limpieza de cabezales', 'Mantenimiento', 'Otro problema'],
      brands: ['Epson', 'HP', 'Canon', 'Brother'],
      placeholder: 'Modelo (ej. L3250)'
    },
    laptop: {
      label: 'Laptop',
      problems: ['No enciende o no carga', 'Pantalla rota o sin imagen', 'Teclado o touchpad', 'Lenta o con virus', 'Se calienta o hace ruido', 'Mejora a SSD o más RAM', 'Otro problema'],
      brands: ['HP', 'Lenovo', 'Dell', 'Asus', 'Acer', 'Apple (MacBook)'],
      placeholder: 'Modelo (ej. IdeaPad 3)'
    },
    pc: {
      label: 'Computadora',
      problems: ['No enciende o se reinicia', 'Pantallazo azul o errores', 'Formateo e instalación', 'Cambio de piezas', 'Limpieza y mantenimiento', 'Está muy lenta', 'Otro problema'],
      brands: ['HP', 'Lenovo', 'Dell', 'Asus', 'Acer', 'Apple (iMac)', 'PC armada'],
      placeholder: 'Modelo (opcional)'
    }
  };

  function limaNow() {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Lima', weekday: 'short', hour: 'numeric', minute: 'numeric', hourCycle: 'h23'
    }).formatToParts(new Date());
    var get = function (type) { return parts.filter(function (p) { return p.type === type; })[0].value; };
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
    return { day: day, minutes: (parseInt(get('hour'), 10) % 24) * 60 + parseInt(get('minute'), 10) };
  }

  function formatTime(minutes) {
    var h = Math.floor(minutes / 60), m = minutes % 60;
    var suffix = h < 12 ? 'a. m.' : 'p. m.';
    var h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + ':' + (m < 10 ? '0' : '') + m + ' ' + suffix;
  }

  function statusText(now) {
    var today = SCHEDULE[now.day];
    if (today && now.minutes >= today[0] && now.minutes < today[1]) {
      return { open: true, text: 'Abierto ahora · cierra a las ' + formatTime(today[1]) };
    }
    if (today && now.minutes < today[0]) {
      return { open: false, text: 'Cerrado · abre hoy a las ' + formatTime(today[0]) };
    }
    for (var i = 1; i <= 7; i++) {
      var d = (now.day + i) % 7;
      if (SCHEDULE[d]) {
        var when = i === 1 ? 'mañana' : DAY_NAMES[d];
        return { open: false, text: 'Cerrado · abre ' + when + ' a las ' + formatTime(SCHEDULE[d][0]) };
      }
    }
    return { open: false, text: '' };
  }

  function updateStatus() {
    var now;
    try { now = limaNow(); } catch (e) { return; }
    if (now.day < 0) return;
    var s = statusText(now);
    document.querySelectorAll('[data-status]').forEach(function (el) {
      el.classList.toggle('is-open', s.open);
      el.classList.toggle('is-closed', !s.open);
      var t = el.querySelector('[data-status-text]');
      if (t && s.text) t.textContent = s.text;
    });
    document.querySelectorAll('.hours tr[data-days]').forEach(function (row) {
      row.classList.toggle('is-today', row.getAttribute('data-days').split(',').indexOf(String(now.day)) !== -1);
    });
  }

  // Cotizador
  var form = document.getElementById('cotizar');
  var chips = document.getElementById('problemChips');
  var brand = document.getElementById('brand');
  var model = document.getElementById('model');
  var current = null;

  function selectDevice(key) {
    var device = DEVICES[key];
    if (!device || !form) return;
    current = key;
    form.querySelectorAll('.device').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-device') === key ? 'true' : 'false');
    });
    chips.innerHTML = '';
    device.problems.forEach(function (problem) {
      var label = document.createElement('label');
      label.className = 'chip';
      var input = document.createElement('input');
      input.type = 'checkbox';
      input.value = problem;
      var span = document.createElement('span');
      span.textContent = problem;
      label.appendChild(input);
      label.appendChild(span);
      chips.appendChild(label);
    });
    brand.innerHTML = '';
    ['Marca'].concat(device.brands, ['Otra marca']).forEach(function (name, i) {
      var option = document.createElement('option');
      option.value = i === 0 ? '' : name;
      option.textContent = name;
      brand.appendChild(option);
    });
    model.placeholder = device.placeholder;
    form.querySelectorAll('fieldset[data-step]').forEach(function (fs) { fs.disabled = false; });
  }

  function buildMessage() {
    var lines = ['Hola Compumac, quiero cotizar una reparación.'];
    if (current) {
      var equipo = DEVICES[current].label;
      if (brand.value) equipo += ' ' + brand.value;
      if (model.value.trim()) equipo += ' ' + model.value.trim();
      lines.push('Equipo: ' + equipo);
      var problems = Array.prototype.map.call(chips.querySelectorAll('input:checked'), function (i) { return i.value; });
      if (problems.length) lines.push('Falla: ' + problems.join(', '));
    }
    return lines.join('\n');
  }

  if (form) {
    form.querySelectorAll('.device').forEach(function (btn) {
      btn.addEventListener('click', function () { selectDevice(btn.getAttribute('data-device')); });
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var url = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(buildMessage());
      window.open(url, '_blank', 'noopener');
    });
  }

  document.querySelectorAll('[data-pick]').forEach(function (link) {
    link.addEventListener('click', function () { selectDevice(link.getAttribute('data-pick')); });
  });

  // Menu movil
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  updateStatus();
  setInterval(updateStatus, 60000);
})();
