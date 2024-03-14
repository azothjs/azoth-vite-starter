import { use } from 'azoth/channels';

// emoji service call
const EMOJI_URL = 'https://emojihub.yurace.pro/api/all';
const fetchEmojis = () => fetch(EMOJI_URL).then((r) => r.json());

export default function Emojis() {
  const [EmojiList] = use(fetchEmojis(), Emoji, { map: true });

  return (
    <ul class="emojis">
      <EmojiList />
    </ul>
  );
}

function Emoji({ name, htmlCode }) {
  return <li title={name} innerHTML={htmlCode.join('')} />;
}
