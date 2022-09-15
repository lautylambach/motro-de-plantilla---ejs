class ProductosApi {
    constructor() {
        this.productos = [
            {
                "title": "teclado",
                "price": "2500",
                "thumbnail": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/random-keygenerator-keygen-shuffle-arrows-512.png",
                "id": 1
              },
              {
                "title": "auriculares",
                "price": "1850",
                "thumbnail": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/mail-letter-offer-512.png",
                "id": 2
              },
              {
                "title": "microfono",
                "price": "2500",
                "thumbnail": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/paste-clipboard-copy-512.png",
                "id": 3
              },
              {
                "title": "monitor",
                "price": "18000",
                "thumbnail": "https://cdn4.iconfinder.com/data/icons/basic-user-interface-elements/700/save-guardar-diskette-512.png",
                "id": 4
              }
        ]
        this.id = 0
    }

    listar(id) {
        const prod = this.productos.find(prod => prod.id == id)
        return prod || { error: 'producto no encontrado' }
    }

    listarAll() {
        return [...this.productos]
    }

    guardar(prod) {
        const newProd = { ...prod, id: ++this.id }
        this.productos.push(newProd)
        return newProd
    }

    actualizar(prod, id) {
        const newProd = { id: Number(id), ...prod }
        const index = this.productos.findIndex(p => p.id == id)
        if (index !== -1) {
            this.productos[index] = newProd
            return newProd
        } else {
            return { error: 'producto no encontrado' }
        }
    }

    borrar(id) {
        const index = this.productos.findIndex(prod => prod.id == id)
        if (index !== -1) {
            return this.productos.splice(index, 1)
        } else {
            return { error: 'producto no encontrado' }
        }
    }
}

module.exports = ProductosApi
