import {
  Button,
  Column,
  Container,
  Heading,
  Hr,
  Img,
  Row,
  Section,
  Text,
} from "@react-email/components";

import * as styles from "./styles";

export default function InvitationEmail(mailData: MailData) {
  const playing_at = new Date(mailData.playing_at);
  const formattedPlayingAt = playing_at.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const imageName = styles.sportImg[mailData.name];
  const imageSrc = `http://localhost:3310/public/img_sports/${imageName}`;

  return (
    <>
      <Section style={{ marginTop: 16, marginBottom: 16 }}>
        <Img
          alt={mailData.name}
          height="320"
          src={imageSrc}
          style={styles.imgHeader}
        />
        <Section
          style={{
            marginTop: 32,
            textAlign: "center",
          }}
        >
          <Heading style={styles.title}>
            Invitation de {mailData.organizer_username} !
          </Heading>
          <Text style={styles.text}>
            {mailData.organizer_username} t'a invité à son activité <br />
          </Text>
          <Text style={styles.activity}>{mailData.name}</Text>
          <Section
            style={{
              textAlign: "center",
              marginTop: "25px",
              marginBottom: "16px",
            }}
          >
            <Container
              style={{
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              <Row style={{ display: "inline-block", textAlign: "center" }}>
                {/* DATE */}
                <Column
                  style={{
                    padding: "0 10px",
                    display: "inline-block",
                    verticalAlign: "top",
                  }}
                >
                  <table
                    align="center"
                    border={0}
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <Img
                          src="http://localhost:3310/public/icons/calendar.png"
                          alt="calendar"
                          width="18"
                          height="18"
                        />
                      </td>
                      <td
                        style={{ paddingLeft: "8px", verticalAlign: "middle" }}
                      >
                        <Text style={styles.info}>
                          {formattedPlayingAt.charAt(0).toUpperCase() +
                            formattedPlayingAt.slice(1)}
                        </Text>
                      </td>
                    </tr>
                  </table>
                </Column>

                {/* HEURE */}
                <Column
                  style={{
                    padding: "0 10px",
                    display: "inline-block",
                    verticalAlign: "top",
                  }}
                >
                  <table
                    align="center"
                    border={0}
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <Img
                          src="http://localhost:3310/public/icons/clock.png"
                          alt="clock"
                          width="18"
                          height="18"
                        />
                      </td>
                      <td
                        style={{ paddingLeft: "8px", verticalAlign: "middle" }}
                      >
                        <Text style={styles.info}>
                          {mailData.playing_time.slice(0, 5).replace(":", "h")}
                        </Text>
                      </td>
                    </tr>
                  </table>
                </Column>

                {/* ADRESSE */}
                <Column
                  style={{
                    padding: "0 10px",
                    display: "inline-block",
                    verticalAlign: "top",
                  }}
                >
                  <table
                    align="center"
                    border={0}
                    cellPadding="0"
                    cellSpacing="0"
                  >
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>
                        <Img
                          src="http://localhost:3310/public/icons/localisation.png"
                          alt="location"
                          width="18"
                          height="18"
                        />
                      </td>
                      <td
                        style={{ paddingLeft: "8px", verticalAlign: "middle" }}
                      >
                        <Text style={styles.info}>
                          {mailData.address} {mailData.zip_code} {mailData.city}
                        </Text>
                      </td>
                    </tr>
                  </table>
                </Column>
              </Row>
            </Container>
          </Section>
          <Text style={styles.addInfo}>
            Pour plus d'informations et pour confirmer ou non ta présence,
            rendez-vous sur TeamUp !
          </Text>
          <Button href="http://localhost:3000/" style={styles.button}>
            Prêt, partez !
          </Button>
        </Section>
      </Section>

      <Section style={{ textAlign: "center" }}>
        <Hr
          style={{
            borderColor: "rgb(209,213,219)",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        />

        <table
          align="center"
          border={0}
          cellPadding="0"
          cellSpacing="0"
          style={{ margin: "0 auto" }}
        >
          <tr>
            <td style={{ verticalAlign: "middle", width: "48px" }}>
              <Img
                alt="logo TeamUp"
                height="48"
                width="48"
                src="http://localhost:3310/public/logo.png"
                style={{
                  borderRadius: "9999px",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </td>
            <td
              style={{
                verticalAlign: "middle",
                paddingLeft: "12px",
                textAlign: "left",
              }}
            >
              <Heading style={styles.addInfo}>L'équipe TeamUp !</Heading>
            </td>
          </tr>
        </table>
      </Section>
    </>
  );
}
