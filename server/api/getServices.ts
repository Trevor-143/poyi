
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, getApps, cert } from 'firebase-admin/app';

const apps = getApps();
if (!apps.length) {
    initializeApp({
        credential: cert('polyuganda-firebase-adminsdk-tl0ar-5658a3cf0f.json')
    });
}

export default defineEventHandler(async () => {
    const Store = getFirestore();
    const serviceSnap = await Store.collection('services').get();

    const serviceData = serviceSnap.docs.map(doc => {
        const service = doc.data();
        return {
            id: doc.id,
            content: service.content,
            name: service.name,
            image: service.image,
        };
    })

    // console.log(serviceData)
    return serviceData;
});