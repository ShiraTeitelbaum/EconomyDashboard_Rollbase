﻿(function ($, window, document, undefined) {
    'use strict';

    //seems like didnt change anything when changed this!
    
    var pluginName = 'secondLoactionsSelector';
    var defaults = {
        objName: 'OurUserLocation',
        columns: ['id', 'LocationName', 'locationId']
        //columns: ['id', 'LocationName', 'locationId']
    };

    var init = function () {
        var _ = this;

        var selectorElement = document.createElement('div');

        selectorElement.id = 'secondLoactionsSelector';
        //selectorElement.setAttribute('style', 'float: right; margin: 10px 50px 0 0;');
        //changed here the margin and then the selector of the locations 'secondLocationSelector' is in the middle of the title

        //selectorElement.setAttribute('style', 'float: right; margin: 0 0 0 0;');
        //selectorElement.setAttribute('style', 'margin: 10px 50px 14px 0;');
          selectorElement.setAttribute('style', 'margin: 1px 50px 4px 0px;');

        //if want the date and time- take from dssC.. from safety to see how
        //var isMobile1 = false; //initiate as false
        //// device detection
        //if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        //    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile1 = true;




        //add the date and time div...
        var selectorElementDate = document.createElement('div');

        var d = new Date();
        //var x = document.getElementById("dateAndtime");
        //x.innerHTML = rbf_formatDate(d, "dddd h:mmtt d MMM yyyy");

        var isMobile1 = false; //initiate as false
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile1 = true;



        selectorElementDate.id = 'date_AndTime';
        selectorElementDate.style.height = "30px";
        //selectorElementDate.style.fontSize = "28px";
        selectorElementDate.innerHTML = rbf_formatDate(d, "dddd h:mmtt d MMM yyyy");
        //selectorElementDate.setAttribute('style', 'direction: ltr; font-size:17px; margin: -28px 0 0px 83px;');
        if (isMobile1 != true)
            selectorElementDate.setAttribute('style', 'direction: ltr; font-size:17px; margin: -37px 0 0px 83px;');
        else
            selectorElementDate.setAttribute('style', 'color: #4C4C4C; direction: ltr; font-size:17px; margin: -37px 0 0px -320px;');

        _.element.appendChild(selectorElement);

        $.when(loadDataSource(_.settings.objName, _.settings.columns)).done(function (dataSource) {

            _.dataSource = dataSource;

            var errorsCallback = rbv_errorsCallback;
            var errorHandler = onLoadSelectedOptionError.bind(_, dataSource);

            rbf_setErrorsCallback(errorHandler);

            $.when(loadSelectedOption.call(_)).done(function () {

                initDropDown.call(_);

            });

            rbf_setErrorsCallback(errorsCallback);
        });
    };

    var initDropDown = function () {
        //alert("hi 1")
        var _ = this;

        var ds = new kendo.data.DataSource({
            data: _.dataSource,
            schema: {
                model: { id: 'id' }
            }
        });

        _.selector = $('#secondLoactionsSelector').kendoDropDownList({
            dataValueField: 'id',
            dataTextField: 'LocationName',
            dataSource: ds,
            value: _.initialId,
            animation: false,
            change: function (e) {
                //   alert("hi 2" );
                var dataItem = this.dataItem();

                if (!dataItem.id) {
                    return;
                }

                $.when(saveSelectedOption(dataItem.id)).done(function () {
                    document.dispatchEvent(new CustomEvent('secondLocations:context-update', { 'detail': dataItem }));
                });
            }
        }).data('kendoDropDownList');

        document.dispatchEvent(new CustomEvent('secondLocations:context-update', { 'detail': ds.get(_.initialId) }));
    };

    var loadSelectedOption = function () {
        var _ = this;
        return $.Deferred(function () {
            //alert("hi 3")
            var self = this;

            rbf_getSessionData('secondLocationsContext', function (dataValue) {
                //alert("hi 4")
                _.initialId = dataValue;
                self.resolve();
            });
        });
    };

    var onLoadSelectedOptionError = function (dataSource) {
        //alert("hi 5")
        var _ = this;

        $.when(saveSelectedOption(dataSource[0].id)).done(function () {
            _.initialId = dataSource[0].id;
            initDropDown.call(_);
        });
    };

    var saveSelectedOption = function (dataValue) {
        return $.Deferred(function () {
            var self = this;

            rbf_setSessionData('secondLocationsContext', dataValue, function () {
                self.resolve();
            });
        });
    };

    var loadDataSource = function (objName, columns) {
        // alert("hi 6 new 1")
        return $.Deferred(function () {
            var self = this;
            
            //var query = "SELECT " + columns.join(',') + " FROM " + objName + " WHERE LoginName="+'{!#CURR_USER.loginName}'+" and ParentID!=-1";  didnt work
            //var query = "SELECT " + columns.join(',') + " FROM " + objName + " WHERE LoginName='shirat@safeguard.co.il' and ParentID!=-1"; //worked
            var query = "SELECT " + columns.join(',') + " FROM " + objName + " WHERE ParentID!=-1 GROUP BY locationId";

            rbf_selectQuery(query, 20, function (result) {
                var data = secondLocations.transformRecords(result, columns);
                self.resolve(data);
            });
        });
    };

    function secondLoactionsSelector(element, options) {
        var _ = this;

        _.settings = $.extend(true, {}, defaults, options);
        _.element = element;
        _.selector = null;
        _.initialId = null;

        init.call(_);
    };

    $.extend(secondLoactionsSelector.prototype, {

    });

    $.fn[pluginName] = function (options) {

        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new secondLoactionsSelector(this, options));
            }
        });

    };

})(jQuery, window, document);