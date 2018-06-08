//importação do Component do core
import { Component } from '@angular/core' 

//Decorator, permite encaminhar para a classe, Metadados
@Component({     
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    styleUrls: ['./topo.component.css']

/*    --> implementação Inline <--
    styles: [`.exemplo { 
            color: red 
            }`] // backtics para quebra de linha*/
    //template: `<p>Componente topo</p>`   
})

export class TopoComponent {
    public titulo: string = 'Aprendendo Inglês'//One-way-databiding  -- String Interpolation
}