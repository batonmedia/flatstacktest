$(document).ready(function () {
    var headerNav = $('.header-nav');
    $(window)
        .on("scroll", function () {
            var
                //windowHeight = $(window).height(),
                windowsScrollTop = $(window).scrollTop();
            windowsScrollTop > 40 ? headerNav.addClass('fixed') : headerNav.removeClass('fixed');
            //$('.percents').each(function () {
            //    var
            //        self = $(this),
            //        offsetTop = self.offset().top;
            //    if (offsetTop > windowsScrollTop && offsetTop + 160 < windowsScrollTop + windowHeight) {
            //        self.trigger("onscreen");
            //    }
            //});
        })
        .trigger("scroll");

    $('#contact-form')
        .formValidation()
        .on("success.form.fv", function (e) {
            e.preventDefault();
            alert('Your message successfully sent!');
            $(this).data('formValidation').resetForm();
            $(this)[0].reset();
        });

    function drawCircleBar (canvas, barValue, outerRadius, bgColor, barColor, barWidth) {
        var
            //canvas = document.getElementById(elementId),
            canvasContext = canvas.getContext('2d'),
            width = canvas.width,
            height = canvas.height,
            xCenter = width / 2,
            yCenter = height / 2,
            startAngle = 0 - 0.5 * Math.PI,
            endAngle = barValue / 100 * 2 * Math.PI + startAngle,
            radius = outerRadius - barWidth / 2;
        canvasContext.clearRect(0, 0, width, width);
        canvasContext.lineWidth = barWidth;
        canvasContext.beginPath();
        canvasContext.arc(xCenter, yCenter, radius, 0, 2 * Math.PI);
        canvasContext.strokeStyle = bgColor;
        canvasContext.stroke();
        canvasContext.beginPath();
        canvasContext.arc(xCenter, xCenter, radius, startAngle, endAngle);
        canvasContext.strokeStyle = barColor;
        canvasContext.stroke();
    }

    $('.percents').each(function () {
        var
            self = $(this),
            percentsValue = parseInt(self.data('value')),
            percentsColor = self.data('color'),
            valueContainer = self.find('.value'),
            canvasContainer = self.find('.canvas').get(0),
            isAnimated = false;

        drawCircleBar (canvasContainer, 0, 80, '#f7f7f7', '#ed5276', 15);

        self.on("mouseover", function () {
            if (!isAnimated) {
                $(this)
                    .css('content', 0)
                    .animate({ content: percentsValue }, {
                        step: function (now, fx) {
                            var value = Math.floor(now);
                            valueContainer.html(value);
                            drawCircleBar (canvasContainer, value, 80, '#f7f7f7', percentsColor, 15);
                        },
                        duration: 1500
                    });
                isAnimated = true;
            }
            else {
                $(this).off("mouseover");
            }
        });

    });
});