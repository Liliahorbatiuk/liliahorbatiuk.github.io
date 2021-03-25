if ('geolocation' in navigator) {
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
    });
}
else {
    console.log('geolocation not available');
}

var css_file = document.createElement("link");
var widgetUrl = location.href;
css_file.setAttribute("rel", "stylesheet");
css_file.setAttribute("type", "text/css");
css_file.setAttribute("href", 'https://s.bookcdn.com/css/w/booked-wzs-widget-prime.css?v=0.0.1');
document.getElementsByTagName("head")[0].appendChild(css_file);
function setWidgetData_76046(data) {
    if (typeof (data) != 'undefined' && data.results.length > 0) {
        for (var i = 0; i < data.results.length; ++i) {
            var objMainBlock = document.getElementById('m-booked-prime-76046');
            if (objMainBlock !== null) {
                var copyBlock = document.getElementById('m-bookew-weather-copy-' + data.results[i].widget_type);
                objMainBlock.innerHTML = data.results[i].html_code;
                if (copyBlock !== null) objMainBlock.appendChild(copyBlock);
            }
        }
    } else {
        alert('data=undefined||data.results is empty');
    }
}
var widgetSrc = "https://widgets.booked.net/weather/info?action=get_weather_info;ver=6;cityID=4436;type=5;scode=124;ltid=3457;domid=966;anc_id=98047;countday=undefined;cmetric=1;wlangID=29;color=137AE9;wwidth=250;header_color=ffffff;text_color=333333;link_color=08488D;border_form=1;footer_color=ffffff;footer_text_color=333333;transparent=0;v=0.0.1";
widgetSrc += ';ref=' + widgetUrl;
widgetSrc += ';rand_id=76046';
widgetSrc += ';wstrackId=6021906';
var weatherBookedScript = document.createElement("script");
weatherBookedScript.setAttribute("type", "text/javascript");
weatherBookedScript.src = widgetSrc;
document.body.appendChild(weatherBookedScript);

(function () {
    var iframe = '<ifr' + 'ame src="//old.kurs.com.ua/ua/informer/inf2?color=blue" width="276" height="130" frameborder="0" vspace="0" scrolling="no" hspace="0"></ifr' + 'ame>';
    var container = document.getElementById('kurs-com-ua-informer-main-ukraine-276x130-blue');
    container.parentNode.innerHTML = iframe;
})();
