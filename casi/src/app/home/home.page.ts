import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
users :any =[];
formattedData: string = '';
  constructor(private http: HttpClient ) {}
  getUser(){
    this.http.get('https://demo.sotecprotech.com/views/aho/prueba3.php').subscribe(
      (Response) => {
        console.log(Response);
        this.users = Response;
      },
      (error) => {
        console.error('Error en la solicitud HTTP:', error);
      }
    );
}
generatePDF() {
  const doc = new jsPDF();
  let y = 10;

  this.users.forEach((user: any, index: number) => {  
    const shortName = user.short_name;
    doc.text(`Usuario ${index + 1}: ${shortName}`, 10, y);
    y += 10;
  });

  // Genera el PDF en un Blob
  const pdfBlob = doc.output('blob');

  //  URL de objeto para el Blob
  const pdfUrl = URL.createObjectURL(pdfBlob);

  window.open(pdfUrl);
}


}