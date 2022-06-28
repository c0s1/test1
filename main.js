let app = new Vue({
  el: "#app",
  data: {
      category: [
        {id:1, name:"Granos"},
        {id:2, name:"Bebidas"},
        {id:3, name:"Aseo"},
        {id:4, name:"Lacteos"}
      ],
      products: [],
      sale: [],
      watch: 0,
      n_product: "",
      p_product: "",
      c_product: "",
      ct_product: "",
      d_product: "",

  },
  methods: {
    newProduct(){
      this.products.push({
        n_product : this.n_product,
        p_product : this.p_product,
        c_product : this.c_product,
        ct_product: this.ct_product,
        d_product : this.d_product

      });      
    },
      viewMenu(value){
        if (value == 1) {
          this.watch = 1;
        } else if (value == 2) {
          this.watch = 2;
        } else{
          this.watch = 3;
        }
      },
      addProduct(){
        this.sale.unshift({
          n_product: this.n_product,
        })        
      },
      lsProduct(){
        localStorage.setItem('products', JSON.stringify(this.products));
      }
  }

})
  