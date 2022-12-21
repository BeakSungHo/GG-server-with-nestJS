exports.getTest = async function (req, res) {
    var nStart = new Date().getTime();
    const pythonShell = require("python-shell");
    var options = {
        mode: 'text',
        pythonPath: '',
        pythonOption: ['-u'],
        scriptPath: ''
    };
    pythonShell.PythonShell.run('get.py', options, function (err, results) {
        console.log(results);
        var nEnd = new Date().getTime();
        console.log(nEnd - nStart + "ms");
    });
    return res.send('END');
};
//# sourceMappingURL=testjspy.js.map