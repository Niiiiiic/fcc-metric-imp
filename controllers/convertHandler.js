/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    var regex = /[A-Za-z]/
    // console.log(input, input.search(regex));
    var indexChar = input.search(regex);
    if (indexChar < 0) {
      var result = input;
    } else if (indexChar == 0) {
      return result = 1;
    } else {
      var result = input.substring(0,indexChar);  
    }
    // console.log(result.split('/'));
    if (result.split('/').length > 2 ) {
      var result = 'invalid number';
    } else {
      var result = eval(result);
    }
    
    return result;
  };
  
  this.getUnit = function(input) {
    var regex = /[A-Za-z]/
    // console.log(input, input.search(regex));
    var indexChar = input.search(regex);
    var result = input.slice(indexChar);
    var valid = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG']
    if (valid.includes(result)) {
      return result;
    } else {
      return 'invalid unit'
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    if (initUnit.toLowerCase() == 'gal') {
       var result = 'l';
    } else if (initUnit.toLowerCase() == 'l') {
       var result = 'gal';
    } else if (initUnit.toLowerCase() == 'lbs') {
       var result = 'kg';
    } else if (initUnit.toLowerCase() == 'kg') {
       var result = 'lbs';
    } else if (initUnit.toLowerCase() == 'mi') {
       var result = 'km';
    } else if (initUnit.toLowerCase() == 'km') {
       var result = 'mi';
    } else {
      var result = 'invalid unit';
    }    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    if (unit.toLowerCase()  == 'gal') {
      result = 'gallons'
    } else if (unit.toLowerCase()  == 'l') {
      result = 'liters'
    } else if (unit.toLowerCase()  == 'mi') {
      result = 'miles'
    } else if (unit.toLowerCase()  == 'km') {
      result = 'kilometers'
    } else if (unit.toLowerCase()  == 'lbs') {
      result = 'pounds'
    } else if (unit.toLowerCase()  == 'kg') {
      result = 'kilograms'
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if (initNum == 'invalid number') {
        result = 'invalid number';
    } else if (initUnit.toLowerCase() == 'gal') {
        result = Math.round(galToL*initNum*100000)/100000//.toFixed(4);
    } else if (initUnit.toLowerCase() == 'l') {
        result = Math.round(initNum/galToL*100000)/100000//.toFixed(5);
    } else if (initUnit.toLowerCase() == 'lbs') {
        result = (initNum*lbsToKg)//.toFixed(5);
    } else if (initUnit.toLowerCase() == 'kg') {
        result = (initNum/lbsToKg)//.toFixed(5);
    } else if (initUnit.toLowerCase() == 'mi') {
        result = (initNum*miToKm)//.toFixed(5) ;
    } else if (initUnit.toLowerCase() == 'km') {
        result = (initNum/miToKm)//.toFixed(5);
    } else {
        result = 'invalid unit'
    }
    // console.log(result);
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initUnit == 'invalid unit' || returnUnit == 'invalid unit') {
      if (initNum == 'invalid number') {
       result = 'invalid number and unit'; 
        return result;
      } else {
      result = 'invalid unit';
      return result;
      }
    } else if (initNum == 'invalid number') {
      result = 'invalid number';
      return result;
    } else {
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum.toFixed(5) + ' ' + this.spellOutUnit(returnUnit);
    return result;
    }
  };
  
}

module.exports = ConvertHandler;
