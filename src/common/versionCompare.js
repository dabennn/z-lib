/**
 * 版本号比较
 * @param {String} v1              版本号
 * @param {String} symbol          比较符号 '=' '>' '<' '>='  '<='
 * @param {String} v2              版本号
 * @return {boolean}
 */
export default function versionCompare(v1, symbol, v2) {
  if ('> >= < <= ='.indexOf(symbol) === -1) {
    throw new Error('Invalid symbol');
  }
  if (arguments.length < 3) {
    throw new Error('At least 3 parameters');
  }
  if (typeof v1 !== 'string' || typeof v2 !== 'string') {
    throw new Error('Parameters must be String')
  }
  if (!/^\d+(\.\d+)*$/.test(v1) || !/^\d+(\.\d+)*$/.test(v2)) {
    throw new Error('Invaild Version Number');
  }

  const v1Nums = v1.split('.').map(i => parseInt(i, 10));
  const v2Nums = v2.split('.').map(i => parseInt(i, 10));
  const v1NumsLen = v1Nums.length;
  const v2NumsLen = v2Nums.length;

  if (v1NumsLen - v2NumsLen > 0) {
    v2Nums.push(...Array.from(Array(v1NumsLen - v2NumsLen), () => 0));
  } else if (v1NumsLen - v2NumsLen < 0) {
    v1Nums.push(...Array.from(Array(v2NumsLen - v1NumsLen), () => 0));
  }

  const compare = () => {
    for (let i = 0; i < v1Nums.length; i++) {
      if (v1Nums[i] > v2Nums[i]) {
        return '>';
      } else if (v1Nums[i] < v2Nums[i]) {
        return '<';
      }
    }
    return '=';
  };

  return symbol.indexOf(compare()) !== -1;
};
