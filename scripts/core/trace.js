/* See license.txt for terms of usage */

require.def("core/trace", [
],

function() {

//*************************************************************************************************

var Trace = {
    log: function(){},
    error: function(msg){
        console.log(msg);
    },
    exception: function(msg, err){
        console.log(msg);
        console.log(err.stack);
    },
    time: function(){},
    timeEnd: function(){}
};

if (typeof(console) == "undefined")
    return Trace;


return Trace;

//*************************************************************************************************
});

