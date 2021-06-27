import { Injectable, InternalServerErrorException } from '@nestjs/common';
import ytpl, { ContinueResult, Options, Result } from 'ytpl';

@Injectable()
export class PlaylistsService {
  constructor() {}

  async getPlaylist(playlistId: string, pages: number): Promise<Result> {
    if (playlistId && ytpl.validateID(playlistId)) {
      let playlistContent: Result;

      const ytplOptions: Options = {};

      if (pages) {
        ytplOptions.pages = pages;
      }

      try {
        playlistContent = await ytpl(playlistId, ytplOptions);
      } catch (error) {
        throw new InternalServerErrorException(error);
      }
      if (playlistContent) {
        return playlistContent;
      }
    }
    throw new InternalServerErrorException('Error fetching playlist');
  }

  async continuePlaylist(continuation: Array<any>): Promise<ContinueResult> {
    let continuationArray = continuation;
    if (typeof continuation[2] === 'string') {
      continuationArray = [
        continuation[0],
        continuation[1],
        JSON.parse(continuation[2]),
        JSON.parse(continuation[3])
      ];
      continuationArray[3].limit = Infinity;

      let playlistContinuation: ContinueResult;

      try {
        playlistContinuation = await ytpl.continueReq(continuationArray);
      } catch (error) {
        throw new InternalServerErrorException(error);
      }

      if (playlistContinuation) {
        return playlistContinuation;
      }
    }

    throw new InternalServerErrorException('Error fetching playlist');
  }
}
