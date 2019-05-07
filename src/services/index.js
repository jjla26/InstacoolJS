import { firestore, storage, auth } from 'firebase'
import * as firebase from './firebase'

const services = {
    ...firebase,
}

export const Services = {
    db: firestore.Firestore,
    storage: storage.Storage,
    auth: auth.Auth

}

export default services