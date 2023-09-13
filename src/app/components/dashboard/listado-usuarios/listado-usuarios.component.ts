import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit{

  listausuarios: any;
  cargando: boolean;
  paginaActual: number;
  totalPaginas: number;


  constructor(private usuarioService: UsuarioService){
    this.cargando = true;
    this.paginaActual = 1;
    this.totalPaginas = 1;
    this.optenerUsuarios();
  //  this.usuarioService.getUsuarios().subscribe(data => { 
  //   this.cargando = false;
  //   this.listausuarios = data.data;
  //   this.paginaActual = data.meta.pagination.page;
  //   this.totalPaginas = data.meta.pagination.pages;
  //   //console.log(data.data);
  //  })
  }
    

  ngOnInit(): void {
    
  }

  paginaAnterior(): void {
    this.paginaActual--;
    this.optenerUsuarios();
    
  }

  paginaSiguiente(): void {
    this.paginaActual++;
    this.optenerUsuarios();
    
  }


  optenerUsuarios(): void  {
    this.usuarioService.getUsuarios(this.paginaActual).subscribe(data => { 
      this.cargando = false;
      this.listausuarios = data.data;
      this.paginaActual = data.meta.pagination.page;
      this.totalPaginas = data.meta.pagination.pages;
    })
    
  }

}
