import { profile } from "../data/data";
import Certificates from "./Certificates";
import Container from "./Container";
import Title from "./Title";

export default function About() {
  return (
    <section id="about" className="section">
      <Container>
        <Title title="About Me" sub="A little about who I am and what I do" />
        <p className="mx-auto mb-12 max-w-3xl text-center leading-relaxed text-mu">
          {profile.about}
        </p>
      </Container>
      <Certificates />
    </section>
  );
}
