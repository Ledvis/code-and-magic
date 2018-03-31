'use strict';

window.renderStatistics = function (ctx, names, times) {
  var radialGradient = ctx.createRadialGradient(150, 50, 30, 280, 120, 300);

  radialGradient.addColorStop(0, 'white');
  radialGradient.addColorStop(1, 'grey');
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.shadowBlur = 5;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.fillStyle = radialGradient;
  ctx.fillRect(100, 10, 420, 270);
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'black';
  ctx.fillFont = '16px PT Mono';
  ctx.fillText('Ура выпобедили', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  times.forEach(function (time, i) {
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  });

  ctx.fillText('Худшее время: ' + max.toFixed(2) + ' у игрока ' + names[maxIndex], 120, 80);

  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);
  var barWidth = 40; // px
  var indent = 60; // px
  var lineHeight = 20; // px
  var initialX = 120; // px
  var initialY = 100; // px

  names.forEach(function (name, i) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomNumber = Math.floor((Math.random() + 0.1) * 10) / 10;
      ctx.fillStyle = 'rgba(17, 23, 255, ' + randomNumber + ')';
    }

    ctx.fillRect(initialX + indent * i, initialY, barWidth, step * times[i]);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], initialX + indent * i, histogramHeight + initialY + lineHeight);
  });
};
