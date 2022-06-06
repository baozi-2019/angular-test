import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DownloadOptions, NgxQrcodeStylingService, Options} from "ngx-qrcode-styling";
import {ShapeType} from "ngx-qrcode-styling/lib/ngx-qrcode-styling.options";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  text: string = "";
  @Input() name: string | undefined;

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

  downloadOptions: DownloadOptions = {
    name: "111",
    extension: "jpeg"
  }

  constructor(
    public httpClient: HttpClient,
    private ngxService: NgxQrcodeStylingService
  ) {
  }

  ngOnInit(): void {
    // this.ngxService.download(this.config, this.downloadOptions);
  }

  changeShape() {
    this.ngxService.update(this.config, {
      width: 500
    });
    console.log(this.config);
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

}
