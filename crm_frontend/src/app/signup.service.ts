import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  pipe(arg0: any, arg1: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  BASEURL:string="http://localhost:8080/user/";
  ADMINURL:string="http://localhost:8082/admin/";
    constructor(private http:HttpClient)
     {
   
     }

     validateadmin(data:any){
       return this.http.post<any>(this.ADMINURL+"adminlogin",data);
    }

     register(data:any){
      return this.http.post<any>(this.BASEURL+"saveuser",data);
    }
    validate(data:any){
      return this.http.post<any>(this.BASEURL+"login",data);
    }
    reset(email: string, password: string){
      return this.http.put<any>(`${this.BASEURL}forgotpassword/${email}/${password}`, {});
  }
  forgotPassword(email:string): Observable<any>{
    return this.http.post(`${this.BASEURL}forgot-password`,{email},{ responseType: 'text' });
  }
  
  validateOTP(email: string, otp: string): Observable<any> {
    return this.http.post(`${this.BASEURL}validate-otp`,{email,otp},{ responseType: 'text' });
  }
  resetPassword(email: string, password: string): Observable<any> {
    return this.http.put(`${this.BASEURL}reset-password`, { email, password },{ responseType: 'text' });
  }

  getUsers(): Observable<any[]> {
    return this.http.get<any>(this.ADMINURL+"getuserdetails");
  }
  // grantAccess(email: string): Observable<any> {
  //   return this.http.put(`${this.ADMINURL}access/${email}`, {});
  // }
  
  approveAccess(email: string): Observable<any> {
    return this.http.put<any>(`${this.ADMINURL}giveapproval/${email}`, {responseType: 'text'});
  }
  
  createTicket(ticketData: any): Observable<any> {  
    return this.http.post<any>(`${this.BASEURL}ticket`,ticketData);
     
      }

      getAllTickets(): Observable<any> {
        return this.http.get<any>(`${this.BASEURL}tickets`);
      }
  }
