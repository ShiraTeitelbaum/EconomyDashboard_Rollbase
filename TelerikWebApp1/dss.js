var dss = (function (dss) {
    'use strict';

    var getObject = function (values, columns) {
        var obj = {};

        for (var c = 0; c < columns.length; c++) {
            obj[columns[c]] = values[c];
        }

        return obj;
    };

    var transformQueryResults = function (records, columns) {
        var data = [];

        if (records) {
            for (var i = 0; i < records.length; i++) {
                var obj = getObject(records[i], columns);
                data.push(obj);
            }
            return data;
        }
    };

    return {
        transformRecords: function (records, columns) {
            return transformQueryResults(records, columns);
        },

        getRelatedRows: function (objName, id, relName, columns) {
            return $.Deferred(function () {
                var self = this;

                rbf_getRelatedIds(relName, id, function (relName, id, values) {
                    //var query = 'SELECT ' + columns.join(',') + ' FROM ' + objName + ' WHERE cb_isActive= 1 and id IN (' + values.join(',') + ')';
                    var query = 'SELECT ' + columns.join(',') + ' FROM ' + objName + ' WHERE id IN (' + values.join(',') + ')';

                    rbf_selectQuery(query, 200, function (result) {
                        var data = transformQueryResults(result, columns);

                        self.resolve(data);
                    });

                })
            });
        }
    }
}(this.dss = this.dss || {}));