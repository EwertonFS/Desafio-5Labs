export interface StarWarsVehicle {
    name: string;
    model: string;
    vehicle_class: string;
    url: string;
  }

export interface StarWarsResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarWarsVehicle[];
  }

export interface StarWarsImgMock {
    id: string;
    urlImage: string;
    valueNav: string;
  }
