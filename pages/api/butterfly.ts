// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

const myHeaders = new Headers();
myHeaders.append('api-key', '1EiJMNxAFieGuubW=TiRVN1kYGA=');
myHeaders.append('Content-Type', 'text/plain');

const raw =
  '{\r\n    "datastreams": [{\r\n            "id": "butterfly",\r\n            "datapoints": [{\r\n                    "at": "2023-04-10T14:46:53",\r\n                    "value": "Lion Rock22222222222"\r\n                }\r\n            ]\r\n        }\r\n    ]\r\n}';

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'Lion Rock222' });

  fetch(
    'http://api.onenet.hk.chinamobile.com/devices/161110960/datapoints',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error));
}
