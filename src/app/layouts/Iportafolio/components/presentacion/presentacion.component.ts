import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  nombre = "José Dúmar Jiménez Ruíz";
   fecha: number = Date.now();
   hora:any="00:00:00";
  ngOnInit(): void {
    this.mostrarHora();
  }

  mostrarHora(){
    
    setInterval(()=>{
      this.hora=new Date
    },1000);
  }
}
