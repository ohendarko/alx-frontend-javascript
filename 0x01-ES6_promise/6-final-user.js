import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const [signUpResult, uploadResult] = await Promise.all([
      signUpUser(firstName, lastName),
      uploadPhoto(fileName).catch(error => ({ status: 'rejected', value: error })),
    ]);
    return [
      {
        status: signUpResult.status,
        value: signUpResult.value || signUpResult.error,
      },
      {
        status: uploadResult.status,
        value: uploadResult.value || uploadResult.error,
      },
    ];
  } catch (error) {
    console.error("An unexpected error occurred:", error);
  }
}
