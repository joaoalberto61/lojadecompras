function comprar(){
    var nomeProduto = Number(document.querySelector('input#nomedoproduto').value)
     
    

    if (nomeProduto == 1){        
        imagemMacarrao.style.display = 'block' 
        imagemArroz.style.display = 'none'
        imagemFeijao.style.display = 'none'
        imagemLegumes.style.display = 'none'
        imagemCarne.style.display = 'none' 
        divimagens.style.display = 'block'
        innerHTML      
        
    } else if (nomeProduto == 2){
        imagemMacarrao.style.display = 'none' 
        imagemArroz.style.display = 'block'
        imagemFeijao.style.display = 'none'
        imagemLegumes.style.display = 'none'
        imagemCarne.style.display = 'none'
        divimagens.style.display = 'block'
        
    } else if (nomeProduto == 3){
        imagemMacarrao.style.display = 'none' 
        imagemArroz.style.display = 'none'
        imagemFeijao.style.display = 'block'
        imagemLegumes.style.display = 'none'
        imagemCarne.style.display = 'none'
        divimagens.style.display = 'block'
        
    } else if (nomeProduto == 4){
        imagemMacarrao.style.display = 'none' 
        imagemArroz.style.display = 'none'
        imagemFeijao.style.display = 'none'
        imagemLegumes.style.display = 'block'
        imagemCarne.style.display = 'none'
        divimagens.style.display = 'block'
        
    } else if (nomeProduto == 5){
        imagemMacarrao.style.display = 'none' 
        imagemArroz.style.display = 'none'
        imagemFeijao.style.display = 'none'
        imagemLegumes.style.display = 'none'
        imagemCarne.style.display = 'block'
        divimagens.style.display = 'block'
        
    }else {
        window.alert('Comando invalido')
    }

}