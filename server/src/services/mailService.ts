import { Resend } from "resend";
import InvitationEmail from "../emails/InvitationEmail";
import ReservationEmail from "../emails/ReservationEmail";
import AnswerInvitationEmail from "../emails/AnswerInvitationEmail";
import AnswerRequestEmail from "../emails/AnswerRequestEmail";
import CancelParticipationEmail from "../emails/CancelParticipation";
import CancelActivityEmail from "../emails/CancelActivity";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendInvitationEmail(mailData: MailData) {
  const response = await resend.emails.send({
    from: "TeamUp <onboarding@resend.dev>",
    to: mailData.participant_email,
    subject: `${mailData.organizer_username} vous a invité à son activité !`,
    react: InvitationEmail(mailData),
  });
  return response;
}

async function sendReservationEmail(mailData: MailData) {
  const response = await resend.emails.send({
    from: "TeamUp <onboarding@resend.dev>",
    to: mailData.organizer_email,
    subject: `${mailData.participant_username} ${mailData.auto_validation ? "a réservé une place à votre activité !" : "a fait une demande de réservation pour votre activité !"}`,
    react: ReservationEmail(mailData),
  });
  return response;
}

async function sendAnswerInvitationEmail(mailData: MailData, status: string) {
  const response = await resend.emails.send({
    from: "TeamUp <onboarding@resend.dev>",
    to: mailData.organizer_email,
    subject: `${mailData.participant_username} ${status === "accepted" ? "a accepté" : "a refusé"} votre invitation !`,
    react: AnswerInvitationEmail(mailData, status),
  });

  return response;
}

async function sendAnswerRequestEmail(mailData: MailData, status: string) {
  const response = await resend.emails.send({
    from: "TeamUp <onboarding@resend.dev>",
    to: mailData.participant_email,
    subject: `${mailData.organizer_username} ${status === "accepted" ? "a accepté" : "a réfusé"} votre demande !`,
    react: AnswerRequestEmail(mailData, status),
  });
  return response;
}

async function sendCancelParticipationEmail(
  mailData: MailData,
  selectedTab: string | undefined,
) {
  const response = await resend.emails.send({
    from: "TeamUp <onboarding@resend.dev>",
    to: mailData.organizer_email,
    subject: `${mailData.participant_username} a annulé ${selectedTab === "incoming" || selectedTab === undefined ? "sa participation" : "sa demande de participation"} à votre activité !`,
    react: CancelParticipationEmail(mailData, selectedTab),
  });
  return response;
}

async function sendCancellationActivityEmail(
  mailData: MailData,
  participantsEmailExceptRefused: string[],
) {
  const responses = await Promise.all(
    participantsEmailExceptRefused.map((email) =>
      resend.emails.send({
        from: "TeamUp <onboarding@resend.dev>",
        to: email,
        subject: "Activité annulée !",
        react: CancelActivityEmail(mailData),
      }),
    ),
  );

  return responses;
}

export default {
  sendInvitationEmail,
  sendReservationEmail,
  sendAnswerInvitationEmail,
  sendAnswerRequestEmail,
  sendCancelParticipationEmail,
  sendCancellationActivityEmail,
};
