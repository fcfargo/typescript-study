// Intructions to every other class
// on how the can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
  color: string;
}
export class CustomMap {
  // 변수 googleMap의 타입을 구글 맵 인스턴스(new google.map.Map())로 선언
  // private 변수 선언하여 클래스 외부로부터의 접근 제한
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open({
        anchor: marker,
        map: this.googleMap,
      });
    });
  }
}
