var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/', async function(req, res, next) {
	try {
		const {resolve} = require('path');
		let resourcePath = resolve('./resources');
        //console.log(req);
        //let { data } = req.body;
        const fs = require('fs').promises;
        //await fs.writeFile('C:/Users/subodh.kedar/tlm_desktop/server_zoho/crmResponse/crmResponsesample_'+Date.now()+'.txt', JSON.stringify(req.body));
        await fs.writeFile(resourcePath+'/file_1.txt', JSON.stringify(req.body));
        if (req) {
            res.send({
                IsSuccess: true,
            });
            return;
        } else {
            res.send({
                IsSuccess: false,
                Message: "Some error occurred. Please try again later....?",
            });
            return;
        }
    }
    catch (err) {
        //utils.LogError("getCustomerList", err);
        console.log(err);
        res.send({
            IsSuccess: false,
            Message: "Some error occurred. Please try again later.",
        });
        return;
    }
  	res.send('respond with a resource.....?');
});

router.get('/log', async function(req, res, next) {
	try {
		const {resolve} = require('path');
		let resourcePath = resolve('./resources');
        //console.log(req);
        //let { data } = req.body;
        const fs = require('fs').promises;
        var data = await fs.readFile(resourcePath+'/file_1.txt', 'utf8');  

        if (req) {
            res.send({
                IsSuccess: true,
                body: data.toString()  
            });
            return;
        } else {
            res.send({
                IsSuccess: false,
                Message: "Some error occurred. Please try again later....?",
            });
            return;
        }
    }
    catch (err) {
        //utils.LogError("getCustomerList", err);
        console.log(err);
        res.send({
            IsSuccess: false,
            Message: "Some error occurred. Please try again later.",
        });
        return;
    }
  	res.send('respond with a resource.....?');
});



module.exports = router;
