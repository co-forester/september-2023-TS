interface ICar{
    id?: number;
    brand: string;
    price: number;
    year: number;
}

const carService = {
    getAll: (): Promise<ICar[]> => fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json()),
    getById: (id: number): Promise<ICar> => fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`).then(value => value.json()),
    create: (car:ICar): Promise<ICar> => fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {'Content-type':'application/json'}
    }).then(value => value.json()),
    deleteById: (id: number): Promise<Response> => fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {
        method: 'DELETE'
    }),
}
class CarRender {
    static run(): void{
        this._initForm();
        this.carsShow();
        // this.carDetail()
    }

    private static async carsShow (): Promise<void>{
       const carsDiv = document.querySelector('#carsDiv') as HTMLDivElement;
       carsDiv.innerHTML = '';
       const cars = await carService.getAll();
       cars.forEach(car => {
           const itemDiv = document.createElement('div');
           const {id, brand, price, year} = car;
           itemDiv.innerText = `${id}) ${brand} - ${price} -- ${year}`;
           const btnDel = document.createElement('button');
           const btnDet = document.createElement('button');
           btnDel.innerText = 'delete';
           btnDel.onclick = async (): Promise<void> => {

               await carService.deleteById(id);
               await this.carsShow()
           }
           btnDet.innerText = 'detail';
           btnDet.onclick = async (): Promise<void> => {
               const car = await  carService.getById(id);
               {const carsDiv = document.querySelector('#carsDiv') as HTMLDivElement;
               carsDiv.innerHTML = '';
               const carDiv = document.createElement('div');
               const carBrand = document.createElement('div');
               const carId = document.createElement('div');
               const carPriceYear = document.createElement('div');
               carBrand.classList.add('Brand')
               const {id, brand, price, year} = car;
               carBrand.innerText = `${brand}`;
               carId.innerText = `${id})`;
               carPriceYear.innerText = `- ${price} -- ${year}`;
               carDiv.append(carId, carBrand, carPriceYear);
               carsDiv.appendChild(carDiv)}
           }
           itemDiv.append(btnDel, btnDet);
           carsDiv.appendChild(itemDiv)
       })
    }



    private static _initForm (): void {
        const form = document.forms.namedItem('form');
        const  brand = form.brand as HTMLInputElement;
        const  price = form.price as HTMLInputElement;
        const  year = form.year as HTMLInputElement;
        form.onsubmit = async  (e:SubmitEvent): Promise<void> =>{
            e.preventDefault();
            await  carService.create({brand: brand.value, price: +price.value, year: +year.value});
            await this.carsShow();
            form.reset();
        }
    }
}

CarRender.run()

// carService.getAll().then(value => console.log(value));
// carService.deleteById(9974);
// carService.deleteById(9975);
// carService.deleteById(9976);
// carService.deleteById(9979);
// carService.create({brand: 'bubba', price: 450000, year: 2004}).then(value => console.log(value));
// carService.getAll().then(value => console.log(value));