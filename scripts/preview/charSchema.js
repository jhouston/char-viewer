require.def("preview/charSchema", [], function() {
    // ************************************************************************************************
    // Helper schema object

    function CharSchema() {}
    CharSchema.prototype =
    {
        registerType: function()
        {
            var doIt = function(my, obj){
                for (var name in obj) {
                    if (obj.hasOwnProperty(name) && name != "prototype") {
                        my[name] = obj[name];
                    }
                }
            }
            var that = this;
            for(i=0; i < arguments.length; i +=1) {
                doIt(that, arguments[i]);
            };
        }
    };
    
    var charSchema = new CharSchema();
    
    $.ajax({
          url: 'char.jsonschema',
          async: false,
          dataType: 'json',
          success: function (response) {
              charSchema.registerType(response);
          }
        });
    return charSchema;
});