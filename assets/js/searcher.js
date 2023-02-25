

const loadProducts= () =>{
    let URL= "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.json"
    fetch(URL)
    .then(response => response.json())
    .then(result => {
        result.map(producto => {
            let src= producto.src
            let name= producto.name
            let type= producto.type
            let price= producto.price
            document.getElementsByClassName("productos")[0].innerHTML+= 
            `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm">${type}</p>
                  <a href="javascript:;">
                    <h5>
                      ${name}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                  </p>
                </div>
              </div>
            </div>`
        })

    })
    .catch(error =>{
        console.log(error)
    })



    let URL2= "https://raw.githubusercontent.com/Bootcamp-Espol/FSD02/main/S03D03/clase/recursos/products.xml"
    fetch(URL2)
    .then(response => response.text())
    .then(result => {
        let xml = (new DOMParser()).parseFromString(result, 'application/xml');
        console.log(xml)
        let nombres= xml.getElementsByTagName("name")
        let precios= xml.getElementsByTagName("price")
        let sources= xml.getElementsByTagName("src")
        let types= xml.getElementsByTagName("type")
        let productos= xml.getElementsByTagName("product")
        console.log("CANTIDAD PRODCUTOS: " ,productos.length)
        let type= types[0]
        console.log(type.innerHTML)
        for(let i = 0 ; i <productos.length; i++){
            let src= sources[i].innerHTML
            let name= nombres[i].innerHTML
            let type= types[i].innerHTML
            let price= precios[i].innerHTML
            document.getElementsByClassName("productos")[0].innerHTML+= 
            `
            <div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
              <div class="card card-blog card-plain">
                <div class="card-header p-0 mt-n4 mx-3">
                  <a class="d-block shadow-xl border-radius-xl">
                    <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                  </a>
                </div>
                <div class="card-body p-3">
                  <p class="mb-0 text-sm">${type}</p>
                  <a href="javascript:;">
                    <h5>
                      ${name}
                    </h5>
                  </a>
                  <p class="mb-4 text-sm">
                    <b>Price: </b> $ ${price}
                  </p>
                </div>
              </div>
            </div>
            `
            

        }
    })
    .catch(error => console.log(error))
}

loadProducts()