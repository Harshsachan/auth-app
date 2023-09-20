import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './role.decorator';
import { Role } from '../users/role.enum';
// import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log("Role - Guard");
    const requiredRoles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());
    
    if (!requiredRoles) {
      return true; // No roles are required, allow access
    }
    //console.log("request");
    const request = context.switchToHttp().getRequest();
    //console.log(request.user);
        
    // Check if user is set in the request
    if (!request.user) {
      return false; // User not authenticated
    }

    // Assuming you store user information in the JWT payload
    const user = request.user;
    //console.log("user");
   // console.log(user);
    
    
    return requiredRoles.some((role) => user.roles.includes(role));
  }
}
