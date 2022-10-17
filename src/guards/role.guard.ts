import {
    Injectable,
    CanActivate,
    ExecutionContext,
    Scope,
} from '@nestjs/common';

@Injectable({scope: Scope.REQUEST})
export class RolesGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        if (!request.user) {
            return false;
        }
        return true;
    }
}
