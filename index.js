var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use(require('prerender-node').set('prerenderToken', 'nuWyXXOkCS52aGgfD9TQ'));

app.listen(process.env.PORT || 3000);
