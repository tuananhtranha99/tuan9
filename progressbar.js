$(document).ready(function () {
    var trangthai = "duoi1000";
$(window).on('scroll', function () {
    var x = this.pageYOffset;
    if (x > 1500) {
        if (trangthai == "duoi1000") {
            trangthai == "tren1000";
            var bar = new ProgressBar.Circle('#circle1', {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 2000,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#00a2ff', width: 8 },
                to: { color: '#00a2ff', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar.text.style.fontSize = '2rem';

            bar.animate(0.9);


            var bar1 = new ProgressBar.Circle('#circle2', {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 2000,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#e60374', width: 8 },
                to: { color: '#e60374', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar1.text.style.fontSize = '2rem';

            bar1.animate(0.75);


            var bar2 = new ProgressBar.Circle('#circle3', {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 2000,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#03d37c', width: 8 },
                to: { color: '#03d37c', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar2.text.style.fontSize = '2rem';

            bar2.animate(0.70);





            var bar3 = new ProgressBar.Circle('#circle4', {
                color: '#000000',
                // This has to be the same size as the maximum width to
                // prevent clipping
                strokeWidth: 8,
                trailWidth: 8,
                easing: 'easeInOut',
                duration: 2000,
                text: {
                    autoStyleContainer: false
                },
                from: { color: '#f08902', width: 8 },
                to: { color: '#f08902', width: 8 },
                // Set default step function for all animate calls
                step: function (state, circle) {
                    circle.path.setAttribute('stroke', state.color);
                    circle.path.setAttribute('stroke-width', state.width);

                    var value = Math.round(circle.value() * 100);
                    if (value === 0) {
                        circle.setText('');
                    } else {
                        circle.setText(value + "%");
                    }

                }
            });
            bar3.text.style.fontSize = '2rem';

            bar3.animate(0.85);
            $(window).off('scroll');
        }
    }
    else {
        if (trangthai == "tren1000") {
            trangthai = "duoi1000";
        }
    }
})
});