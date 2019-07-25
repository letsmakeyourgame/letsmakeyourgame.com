import * as React from 'react';
import img1 from '../assets/img/pic1.jpg';
import img2 from '../assets/img/pic2.jpg';
import img3 from '../assets/img/pic3.jpg';
import img4 from '../assets/img/pic04.jpg';
import img5 from '../assets/img/pic05.jpg';
import './Main.css';

export default function Main() {
  return (
    <div id="main">
      <section id="about" className="wrapper style1">
        <div className="inner">
          <div className="flex flex-2">
            <div className="col col1">
              <div className="image round fit">
                <img src={img2} alt="Stock" />
              </div>
            </div>
            <div className="col col2">
              <h3>About Me</h3>
              <p>
                I'm an experienced software engineer who's always had a passion
                for game development. Unfortunately, little has been brought to
                fruition in that world largely due to the fact that I am not an
                artist, nor do my game ideas generally appeal to others. As I've
                gotten older, I've realized that my need to create a game isn't
                necessarily a need to express my own game idea, but simply
                anything worth making. This might sound odd, but if I'm going to
                spend time bringing a game to production, I'd rather spend it
                helping someone else along the way who doesn't share my
                skillset, but does share my passion for a well-crafted game
                experience.
              </p>
              <p>
                As far as technical skills go, I specialize in full-stack web
                applications, but have a wide range of experience from very
                low-level networking to high-level orginzation and architecture
                for a variety of platforms and environments. I tend to prefer
                the web space primarily because of its accessiblity and its
                quickly-evolving technologies. However, this doesn't mean I will
                only make games that fit this platform, as that will largely
                depend on the game itself. Rest assured, that I am certainly
                capable of producing quality software for whatever platform best
                meets the requirements.
              </p>
              <p>
                In my spare time, when I'm not writing and re-writing game
                engines, I'm often reading history and philosophy, or out
                cooking over an fire pit (the way God intended). My favorite
                pastime is sitting outside with friends, discussing everything
                from physics to religious theology over scotch and a cigar.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="info" className="wrapper style2">
        <div className="inner">
          <div className="flex flex-2">
            <div className="col col2">
              <h3>Project Details</h3>
              <p>
                For those who've had that great idea for a game, even fleshed
                out the details, but never had the technical training to turn it
                into something, I want to help you! Maybe you never even saw
                your game idea as a videogame, perhaps it's a board or card
                game. Whatever the case, if it can become a videogame, I want to
                provide my skillset to make it happen. Not knowing how to
                program shouldn't prevent your great idea from getting made!
                But, please, before submitting your game pitch, please be sure
                to read all the details so there are no surprises.
              </p>
              <p>
                Only one project will be active at any given time, and chosen
                under no timeline or strict rules. The project will be chosen as
                it is received, only if the premise interests me, the logistics
                work, and we seem like a good fit to work on it. There is no
                deadline for selecting a project, but once a project is chosen,
                I will not be considering any others until it is has ended.
              </p>
              <p>
                There is also no deadline for completion. This is something I
                will work on in my spare time, and how much time you put into it
                is entirely up to you, but I recommend the same pace. Let's take
                it easy, enjoy the process, and not allow it to be a source of
                anxiety or stress. That said, we will set up loose timelines and
                milestones so we each have an idea what to (roughly) expect as
                we go on, and so there are no major surprises. This also helps
                maintain structure in its development, so too much time doesn't
                get spent on something that ultimately isn't even used in the
                final product.
              </p>
              <p>
                Pitches may be submitted via email or twitter, and I will
                respond to each within 5 business days (though usually much
                sooner), until a project is chosen. Please note that{' '}
                <strong>
                  all pitches may be published anonymously at my discretion
                </strong>
                . I will never release personal details (such as your name or
                contact info), but may use anonymous exerpts from emails/tweets
                in future blog posts, public tweets, etc., as either examples of
                things I like or dislike.
              </p>
            </div>
            <div className="col col1 first">
              <div className="image round fit">
                <a href="generic.html" className="link">
                  <img src={img1} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-2">
            <div className="">
              <p>
                <strong>No Cost</strong>
              </p>
              <p>
                As I make a comfortable living, this is not a financial
                endeavor, but a creative one. If you're looking to get rich from
                your game idea, this project is not for you. I will never charge
                for my time, only in certain circumstances will I charge the
                cost for resources necessary to the development or publishing
                (e.g., server hosting, website registration, etc.), but will
                always make an effort to set you up with the accounts and
                resources, so you are the sole owner and can pay (or not pay)
                for everything directly, as I'd prefer to never exchange any
                funds.
              </p>
              <p>
                The game itself must be non-profit. Again, this is a creative
                endeavor, not a financial one. I am not interested in the stress
                that comes with being responsible for your financial well-being,
                so I'm cutting the Gordian knot by enforcing a no-profit rule on
                the project. Should the game require certain expenses to
                operate, we will discuss necessary measures (purchase price,
                subscriptions, donations, ads, etc.) to cover those costs.
                However, if you are more interested in bringing joy to people
                with your game than the possiblity of accruing wealth, than
                perhaps this is the project for you.
              </p>
              <p>
                <strong>Free &amp; Open Source</strong>
              </p>
              <p>
                All of the code for the game will remain on a free, open-source,
                public git repository for the entire project duration. This is
                to resolve any potential issues that may arise from a lapse in
                the partnership. If for whatever reason we decide to discontinue
                the project, there will be no discussion as to who owns the
                code, as it is already public domain. Nor will there be any
                issue if you are unhappy with my progress and want to take your
                project elsewhere, as all of my work will be freely available
                for you to transfer to whomever you chose to work on it next.
                Finally, this also eliminates any cost of hosting a code
                repository, as{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  github
                </a>{' '}
                will host a public repository for free.
              </p>
              <p>
                For those less familiar with the open source concept, allow me
                to squash some common concerns.
              </p>
              <p>
                Open Source does not mean a less-secure or easier-to-hack
                multiplayer environment, as security is always dependent on
                environment keys, which are not stored in the source code.
                Depending on closed-source as an anti-cheat measure is called
                "security through obfuscation", and any network engineer will
                tell you that such a measure is not only ineffective at stoping
                malicious attacks, but can create more vulnerabilities since it
                can't be as widely reviewed.
              </p>
              <p>
                Nor does open source mean anyone can steal your game. Yes, all
                of the code used for the game is freely available to be borrowed
                and used by anyone else, but the name is not free-domain, and
                neither are any custom art-assets. The difference between
                between code and art is that the former is simply an expression
                of mathematics -- WHICH CANNOT BE OWNED BY ANYONE -- and the
                latter is an expression of personal feeling, be it instinct or
                intuition. I believe intellectual property to be a thoroughly
                assinine concept, born out of pure greed, and will never take
                any measure to enforce it. However, digital or not, property is
                property, and thus just as copying a file called "DieHard.mkv"
                is not the same as recreating the movie from casting to editing,
                neither is copying art assets the same as recreating them. If
                someone wants to go through the trouble of copying the idea
                fully and recreating every asset necessary, then by all means,
                everything but the name is theirs.
              </p>
              <p>
                <strong>Artwork &amp; Digital Assets</strong>
              </p>
              <p>
                I am not an artist. I repeat:{' '}
                <strong>I am not an artist!</strong> Although I have produced my
                own art assets in the past (usually retro-style pixel-art), I am
                not time-proficient at it, nor do I enjoy it. So if your game
                depends on artwork (whether drawings, 2D sprites, 3D models,
                animations, etc., etc.), it will be entirely up to you to
                provide them. There are several resources for free game assets
                that may suit the project, so if artwork isn't as important to
                the project, there are free solutions to you having to be an
                artist yourself.
              </p>
              <p>
                In the case where custom assets are provided by you (or a third
                party through you), you will be the sole owner (or licensee) of
                the assets used. The exact implementation may change if it
                doesn't meet the requirements for the project, but in most cases
                they will likely be stored on Amazon S3 cloud storage, in an
                account owned by you (that I will set up for you, if needed).
                Should the project dissolve, you will retain full control over
                all of the assets.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="wrapper style1">
        <div className="inner">
          <div className="flex flex-2">
            <div className="col col1">
              <div className="image round fit">
                <img src={img3} alt="Stock" />
              </div>
            </div>
            <div className="col col2">
              <h3>Frequently Asked Questions</h3>
              <p>
                <strong>Is it really free?</strong>
              </p>
              <p>
                Yes, it's really free. I'm going to be fiddling around with game
                development anyway, and I already make a good living, so why not
                help someone out?
              </p>
              <p>
                <strong>Why are you doing this?</strong>
              </p>
              <p>
                Because I'd like to be able to help others bring their ideas to
                life using my professional skill set in an domain that I'm
                passionate about.
              </p>
              <p>
                <strong>No really, why are you doing this?</strong>
              </p>
              <p>Okay... Moving on.</p>
              <p>
                <strong>What do you need from me?</strong>
              </p>
              <p>
                Your idea. You can email or message me on twitter (
                <a href="#contact">see below</a>) with your elevator pitch. For
                those unfamiliar with the term, it essentially means the
                shrotened version of your idea -- one you'd be able to tell me
                during a short elevator ride. Keep it brief; keep it simple. If
                I have questions, I'll ask them. What I'm looking for is a good
                concept, from someone who is passionate about it, and willing to
                follow through.
              </p>
              <p>
                What I DON'T want in your initial pitch are attachments of
                spreadsheets, documents, or concept art that go into the details
                of the game. Again:{' '}
                <strong>short, simple, to the point.</strong>
              </p>
            </div>
          </div>
          <div className="flex flex-2">
            <div>
              <p>
                <strong>What kinds of games interest you?</strong>
              </p>
              <p>
                Besides one or two (see next Q/A), there aren't any genres I'll
                say no to. I'm definitely more partial to "thinking" games than
                "action" games, so there's a good chance I'll vibe with your
                visual novel, puzzle, or adventure game ideas, than I will with
                your motocross assassin shoot-em-ups. Although, as I write this,
                "Motocross Assassin Shoot 'Em Up!" sounds pretty rad. And before
                you ask, no that can't be your idea -- unless of course you have
                REALLY thought it through.
              </p>
              <p>
                To give <em>you</em> an idea, some of my favorite games (in no
                particular order) are Dwarf Fortress, Bastion, Stardew Valley,
                Game Dev Story, Counter-Strike, Command &amp; Conquer, Most
                Telltale Games, Recettear, Harvest Moon, Shin Megami Tensei,
                Dead State, RimWorld, Rollercoaster Tycoon, Divinity, The Elder
                Scrolls, Diablo, Evoland, Octodad, and Super Amazing Wagon
                Adventure! There are certainly others, but these are just a few
                off the top of my head.
              </p>
              <p>
                <strong>Are there any genres that you won't do?</strong>
              </p>
              <p>
                Yes. I won't work on anything X-rated (i.e., porn games),
                anything that glorifies antisocial behavior (think Grand Theft
                Auto), games with in-game currency purchased with real-world
                money (i.e., freemium / pay-to-win games), or MMORPGs. The
                latter is not because I have anything against them, but because
                they simply aren't practical for an indie project, and are very
                commonly pursued.
              </p>
              <p>
                <strong>Will I get rich?</strong>
              </p>
              <p>
                No. As stated several times already, this is a creative
                endeavor, not a financial one. In-fact, part of the terms of
                this project (if you read the section above) is that the game
                remains non-profit. In short, don't quit your day job.
              </p>
              <p>
                I will add that a successful free game with your name on it may
                open doors for you in the game industry if that's your goal. But
                this shouldn't be your motivation. This is only for those that
                truly want to see their game come to life so that it might bring
                some joy to its audience, however big or small.
              </p>
              <p>
                <strong>What if I live in Uganda?</strong>
              </p>
              <p>
                I'll consider pitches from anywhere in the world. However, we
                need to be able to communicate, and while I'm fluent in a
                variety of computer languages, English is the only human one I
                know (or at least well enough to communicate regularly). So as
                long as you can communicate fairly well in English, and have a
                decent internet connection, we'll be good!
              </p>
              <p>
                <strong>Will I have full creative control?</strong>
              </p>
              <p>
                Yes. I'm just here to do the technical stuff. I'm always happy
                to discuss ideas and contribute creatively, but ultimately, it's
                your game and you get the final say, as long as it doesn't
                include X-rated content or promote antisocial behavior.
              </p>
              <p>
                <strong>
                  What if I get cold feet, or suddenly don't have time to
                  continue working on the project?
                </strong>
              </p>
              <p>
                There is no required commitment. I would always rather follow
                through on a project, but our lives are rarely certain, and so
                you are always free to end the project after we start for any
                reason. Any custom game assets will remain under your ownership,
                and all the code will remain free and open source, just as
                everything was during the project.
              </p>
              <p>
                <strong>If/when the game is complete, will it be free?</strong>
              </p>
              <p>
                In most cases, yes. But that largely depends on the costs of
                running and maintaining it after it's live. I'm not looking to
                make a profit, but I'm also not looking to accrue debt. So if
                there is a cost to continue to host the game (be it servers,
                website, what-have-you), we will need to find a way to pay for
                those costs, whether that's charging for the game itself, a
                subscription, or using ads. But NEVER pay-to-win
                microtransactions.
              </p>
              <p>
                <strong>Who are you?</strong>
              </p>
              <p>
                As I value my privacy, I prefer not to disclose my name or
                details publicly, but will to you if we work together. Besides,
                given the nature of the internet, it's not that hard to find out
                for yourself with a little digging. But to most (hopefully) it
                will be of little consequence. Logic dictates that the message
                is always more important than the messenger: so should the act
                be more important than the actor.
              </p>
              <p>
                <strong>I have a different question!</strong>
              </p>
              <p>
                Please reach out using the{' '}
                <a href="#contact">contact info below.</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="wrapper style1">
        <div className="inner">
          <header className="align-center">
            <h3>Reach Out</h3>
            <p>
              Please contact me with your brief game pitch or any questions.
            </p>
          </header>
          <div className="flex flex-1 align-center">
            <div style={{ width: '100%' }}>
              <p>
                Below you can find links for email and twitter. Either can be
                used to reach me, but you're likely to get a faster response
                from email.
              </p>
              <p>
                If submitting a game proposal, please use the game name (even if
                it's a temporary one describing the gameplay) in the subject
                after <em>Pitch:</em>
              </p>
              <p>
                For example, if I wanted to pitch my earlier game idea, the
                subject would read:{' '}
                <strong>Pitch: Motocross Assassin Shoot 'Em Up</strong>.
              </p>
              <p>Hope to hear from you soon!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
