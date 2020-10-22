import { FormControl } from '@angular/forms';
import { CommonValidator } from './common-validator';

fdescribe('CommonValidator', () => {
  it('should create an instance', () => {
    expect(new CommonValidator()).toBeTruthy();
  });

  it('should return null when formcontrol value length is more then 3',()=>{
    const input = new FormControl('1234');
    const result = CommonValidator.password(input);
    expect(result).toEqual(null);
  });

  it('should return null when formcontrol value length is less then 3',()=>{
    const input = new FormControl('12');
    const result = CommonValidator.password(input);
    expect(result).toEqual({length: 'minimum length is 3'});
  });
});
