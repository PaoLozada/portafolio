//Function Bot Searhc Offer
const listProduct = async() => {
    try {
        const respon = await fetch('https://botpaolozada.up.railway.app/botSearchOffer');
        const data = await respon.json();
        console.log(data);
        let tabledataBSO = ``
        let refer = data.listOffer.Ktronix[0]
        let vale = data.listOffer.Ktronix[1]
        for (let i = 0; i <= 2; i++) {
            tabledataBSO += `<tr>
        <td class = 'centered'>Ktronix</td> 
        <td class = 'centered'> ${refer[i]} </td> 
        <td class = 'centered'> ${vale[i]} </td> 
        </tr>`;
        }
        resultDiv.innerHTML = tabledataBSO;
        myModal.hide();
        openModal('tableResult');
    } catch (error) {
        myModal.hide();
        openModal('modalError');

    }
};

//Function Bot Searhc New products
const newProduct = async() => {
    try {
        const respon = await fetch('https://botpaolozada.up.railway.app/botSearchNewProducts?selectItem=' + selectItem + '&categorys=' + categorys + '&options=' + options);
        const data = await respon.json();
        console.log(data);
        let tabledataBNP = ``
        let refer = data.Products.Totto
        refer.forEach(function(values) {
            tabledataBNP += `<tr>
        <td class = 'centered'>${values}</td> 
        </tr>`;
        });
        resultBNP.innerHTML = tabledataBNP;
        myModal.hide();
        openModal('botNewProducts');
    } catch (error) {
        myModal.hide();
        openModal('modalError');

    }
};


//Bot Function Serarch Job
const searchJob = async() => {
    try {
        const respon = await fetch('https://botpaolozada.onrender.com/botSearchJobs?city=' + input_location + '&filter_date=' + selectItem + '&filter_job=' + input_job);
        const data = await respon.json();
        console.log(data);
        let tabledataBSJ = ``;
        let job_item = data.Jobs.Computrabajo[0];
        let info_empl = data.Jobs.Computrabajo[1];
        let how_l = data.Jobs.Computrabajo[2];
        let sizeJob = job_item.length;
        for (let i = 0; i < sizeJob; i++) {
            tabledataBSJ += `<tr>
          <td class='centered'> ${job_item[i]} </td> 
          <td class='centered'> ${info_empl[i]} </td> 
          <td class='centered'> ${how_l[i]} </td> 
          </tr>`;
        }
        resultBSJ.innerHTML = tabledataBSJ;
        myModal.hide();
        openModal('botSearchJob');
    } catch (error) {
        myModal.hide();
        openModal('modalError');

    }
};