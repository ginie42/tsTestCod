import { NextFunction, Request, Response } from "express";
import passport from 'passport';
import passportLocal from 'passport-local';
import { db } from '../model';

const User = db.User;

const LocalStrategy = passportLocal.Strategy;

class Passport {
    public config = () => {
        // Local Strategy
        passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            session: true,
        },
        (email, password, done) => {
            return User.findOne({
                where: {
                    email: email,
                    password: password
                }
            })
            .then((user: any) => {
                if(!user) {
                    return done(null, false, { message: 'Incorrect email or password' })
                }
    
                return done(null, user, { message: 'Login Success' });
            })
            .catch((err: any) => done(err));
        }))

        passport.serializeUser((user, done) => {
            done(null, user);
        });
         
        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
    }
    
    public isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect("/");
    };
}

export default Passport;