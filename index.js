require('dotenv').config();

const app   = require('express')(),
      setup = require('./setup'),

      port  = process.env.PORT || 3000;


setup(app);

// +==============================================================================+
       app.listen(port, () => console.log(`server is ready on port: ${port}`));
// +==============================================================================+