import { Component, OnInit } from '@angular/core';
import { AppModule } from '../../../../app.module';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

   valor:string='hola'
    listaPreguntas:any []= []
  alternativa:any={
    // idquestion = 1,
    // respuestaA='A) RespuestaA',
    // respuestaB='B) RespuestaA',
    // respuestaC='C) RespuestaA',
    // respuestaD='D) RespuestaA'
  }
  alternativas:any= []
  preguntarespuesta:any ={
    // id:1,
    // pregunta:'',
    // multirespuesta:false,
    // alternativas:[

    // ]
  } 
  
  constructor() { }

  ngOnInit(): void {
    this.valor='elemnto'

    this.alternativa = {
      idquestion:2,
      respuestaA:'A) RespuestaA',
      respuestaB:'B) RespuestaA',
      respuestaC:'C) RespuestaA',
      respuestaD:'D) RespuestaA'
    }

    this.alternativas.push(this.alternativa);

    this.preguntarespuesta={
      id:2,
      pregunta:`¿Cuáles de las siguientes son ventajas de migrar a la nube de AWS? (Elija *1/1 dos.)`,
      multirespuesta:false,
      alternativas:this.alternativas
    }

    this.listaPreguntas.push(this.preguntarespuesta);
    console.log(this.listaPreguntas)


  }

}
