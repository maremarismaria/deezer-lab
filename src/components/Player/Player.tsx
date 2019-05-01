import React, {
  FC,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react';
import {DeezerIframe} from '../../types/DeezerElementTypes';
import {USER_ID, USERNAME} from "../../constants";
import './Player.css';

interface IPlayerProps {
  url: string
}

interface IPlayerConfig {
  widget: HTMLDivElement | null;
  className: string;
  src: string;
  scrolling: string;
  frameBorder: string;
  allowTransparency: string;
  width: string;
  height: string;
}

export const Player: FC<IPlayerProps> = ({url}) => {
  const widget: RefObject<HTMLDivElement> = useRef(null);
  const isRadio: boolean = !USER_ID || !USERNAME;

  const [{
    className,
    src,
    scrolling,
    frameBorder,
    allowTransparency,
    width,
    height
  }, setConfig] = useState({
    widget: null,
    className: 'deezer-widget-player',
    src: url,
    scrolling: 'no',
    frameBorder: '0',
    allowTransparency: 'true',
    width: `${(Math.floor((window.innerWidth / 2) - 40))}`,
    height: isRadio ? '95' : '350'
  } as IPlayerConfig);

  useEffect(() => {
    if (widget.current) {
      setConfig({
        className, src, scrolling, frameBorder, allowTransparency, width, height,
        widget: widget.current
      });

      widget.current.innerHTML = '';
      const iframe: DeezerIframe = document.createElement('iframe');

      if (iframe) {
        iframe.src = widget.current.getAttribute('data-src') || src;
        iframe.scrolling = widget.current.getAttribute('data-scrolling') || scrolling;
        iframe.setAttribute('frameBorder', widget.current.getAttribute('data-frame-border') || frameBorder);
        iframe.allowTransparency = widget.current.getAttribute('data-allowTransparency') || allowTransparency;
        iframe.width = widget.current.getAttribute('data-width') || width;
        iframe.height = widget.current.getAttribute('data-height') || height;
        widget.current.appendChild(iframe);
      }
    }
  }, [className, src, scrolling, frameBorder, allowTransparency, width, height]);

  return (
    <div className={'Player'}>
      <div
        ref={widget}
        className={className}
        data-src={src}
        data-scrolling={scrolling}
        data-frame-border={frameBorder}
        data-allow-transparency={allowTransparency}
        data-width={width}
        data-height={height}
      />
    </div>
  )
};

export default Player;