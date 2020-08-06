import moment from 'moment';
import { AnalysisData, RadarData, VisitDataType } from './data.d';

// mock data
const visitData: VisitDataType[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `Mes ${i + 1}`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `buscar la palabra clave-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: 'Electrodomésticos',
    y: 4544,
  },
  {
    x: 'Licores',
    y: 3321,
  },
  {
    x: 'Cuidado de la salud',
    y: 3113,
  },
  {
    x: 'Ropa',
    y: 2341,
  },
  {
    x: 'Blancos',
    y: 1231,
  },
  {
    x: 'otro',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: 'Electrodomésticos',
    y: 244,
  },
  {
    x: 'Licores',
    y: 321,
  },
  {
    x: 'Cuidado de la salud',
    y: 311,
  },
  {
    x: 'Ropa',
    y: 41,
  },
  {
    x: 'Blancos',
    y: 121,
  },
  {
    x: 'otro',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: 'Electrodomésticos',
    y: 99,
  },
  {
    x: 'Licores',
    y: 188,
  },
  {
    x: 'Cuidado de la salud',
    y: 344,
  },
  {
    x: 'Ropa',
    y: 255,
  },
  {
    x: 'otro',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: 'personal',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: 'equipo',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: 'Departamento',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: RadarData[] = [];
const radarTitleMap = {
  ref: 'Citar',
  koubei: 'compartir',
  output: 'rendimiento',
  contribute: 'contribuir',
  hot: 'caliente',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: AnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};

export default {
  'GET  /api/fake_chart_data': getFakeChartData,
};
