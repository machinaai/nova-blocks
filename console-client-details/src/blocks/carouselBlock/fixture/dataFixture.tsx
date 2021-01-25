/**
 * Array with mock data to show in carousel element
 */
export const dataFixture = [
  {
    uid: '-1',
    url: "http://v2v.cc/~j/theora_testsuite/320x240",
  },
  {
    uid: '-2',
    url: "http://v2v.cc/~j/theora_testsuite/320x240",
  },
  {
    uid: '-3',
    url: "http://v2v.cc/~j/theora_testsuite/320x240",
  },
  {
    uid: '-4',
    url: "http://v2v.cc/~j/theora_testsuite/320x240",
  },
]

/**
 * Simulated function to obtain the value of each element of the carousel.
 * @param val of each element of the carousel.
 */
export const actionFixture = (val: any) => {
  console.log(val);
}