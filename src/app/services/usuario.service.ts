import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "fanavarro", nombre: 'Alex', apellido: "Navarro", sexo: 'Masculino'},
    {usuario: "Acarmona", nombre: 'Alejandro', apellido: "Carmona", sexo: 'Masculino'},
    {usuario: "Bcarmelas", nombre: 'Benito', apellido: "Carmelas", sexo: 'Masculino'},
    {usuario: "fpuentes", nombre: 'Fanny', apellido: "Puentes", sexo: 'Femenino'},
    {usuario: "anavarro", nombre: 'Alvey', apellido: "Navarro", sexo: 'Masculino'},
  
  ];

  constructor() { }

  getUsuario(){
    return this.listUsuarios.slice();
  }
  eliminarUsuario(index: number){
    this.listUsuarios.splice(index, 1);
  }
  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
