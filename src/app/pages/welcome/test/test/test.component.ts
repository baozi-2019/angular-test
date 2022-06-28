import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Options, ShapeType, NgxQrcodeStylingService} from "ngx-qrcode-styling";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  text: string = "";
  @Input() name: string | undefined;

  @ViewChild("qrcode", {read: ElementRef, static: false}) qrcode: ElementRef | undefined;

  public config: Options = {
    width: 300,
    height: 300,
    shape: "circle",
    data: "https://www.baidu.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    margin: 5,
    qrOptions: {
      errorCorrectionLevel: "H"
    },
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };



  constructor(
    public httpClient: HttpClient,
    private ngxService: NgxQrcodeStylingService
  ) { }

  ngOnInit(): void {
    // this.ngxService.download("111.jepg", this.qrcode?.nativeElement, 1000);
  }

  changeShape(shape: ShapeType) {
    this.ngxService.update(this.config, {shape}, this.qrcode?.nativeElement);
  }

  getHttp() {
    // let api = '/us/captcha/getKey?appCode=1&sign=d6de719ce7a57f0d5623dc8c2e67849c';
    let api = 'http://192.168.155.57:9090/api/v1.0/us/captcha/getKey?appCode=1&sign=d6de719ce7a57f0d5623dc8c2e67849c';
    this.httpClient.post(api, {
      "common": {
        "version": "1.0",
        "api_ver": "1.1",
        "vt": 1652165681966,
        "openId": "",
        "token": "1"
      },
      "req": {}
    }).subscribe((response) => {
      console.log(response);
    });

    // this.httpClient.get('http://localhost:4201/second-component').subscribe((response) => {
    //   console.log(response);
    // });
  }

  @ViewChild("excel") excel: ElementRef | undefined;

  async uploadExcel() {
    // @ts-ignore
    const arrFileHandle = await window.showOpenFilePicker({
      types: [{
        accept: {
          'image/*': ['.xlsx']
        }
      }],
      // 可以选择多个图片
      multiple: false
    });
    console.log(arrFileHandle);

    // let api = '/api/upload';
    // let formData = new FormData();
    // let name = new Blob(["aaa+"], {type: 'application/json'});
    // let value = new Blob(["123"], {type: 'application/json'});
    // formData.append("name", name);
    // formData.append("value", value);
    // formData.append("excel", this.excel?.nativeElement.files[0]);
    // this.httpClient.post(api, formData).subscribe(data => {
    //   console.log(data);
    // });
  }

  downloadExcel() {
    let api = '/api/laboratoryCmd/cmdExport?laboratoryId=180&categoryCode=illumination';
    this.httpClient.get(api, {
      headers: new HttpHeaders({
        'X-RC-AUTH': 'rc_192_508ae401985647c2929cc58255192c6f'
      }),
      responseType: "blob"
    }).subscribe((response) => {
      let link = document.createElement('a');
      const blob = new Blob([response]);
      link.style.display = 'none';
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', '123.xlsx');
      document.body.appendChild(link);
      link.click()
      document.body.removeChild(link);
    });
  }

}
