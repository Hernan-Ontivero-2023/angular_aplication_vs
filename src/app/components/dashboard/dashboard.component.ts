import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  listausuarios: any;

  //titulo: string;
  // urlImg : string;
  //texto: string;
  // t: boolean;
  //isDisabled: boolean


  constructor(private usuarioService: UsuarioService){
   this.usuarioService.getUsuarios(this.listausuarios).subscribe(data => { 
    this.listausuarios = data.data;
    //console.log(data.data);
   })
    





    // this.listausuarios = [
    //   {nombre: "Alejandro Toro" , email: "alejandro@email.com", genero: "Masculino"},
    //  {nombre: "Juan Perez" , email: "juan@email.com", genero: "Masculino"},
    //    {nombre: "Camila Gonzalez" , email: "camila@email.com", genero: "Femenino"},
    //    {nombre: "Miguel Toro" , email: "miguel@email.com", genero: "Masculino"},
    //    {nombre: "Andrea Gonzalez" , email: "andrea@email.com", genero: "Femenino"},
    //    {nombre: "Camilo Aranda" , email: "camilo@email.com", genero: "nd"},
      



   // ]
    //this.titulo = "Ejemplo"
    //this.texto = ""
    // this.t = true;
    //this.isDisabled = false

   }
  ngOnInit(): void {
 }


// toggle(): void  {
//   this.t = !this.t;
// }

// onChange(evento: string): void {
//   this.usuarioService.modificarTexto(this.texto)
// }


//  cambiarTexto(nuevotexto: string): void {
//    this.texto = "Este texto ha sido cambiado";
//    this.texto = nuevotexto


}



 
//   getNombre(): string { 
//     return this.nombre = "Gabriel"
//   }
  

// suma (num1:number, num2:number): number { 
//   return num1 + num2
//  }
//}
