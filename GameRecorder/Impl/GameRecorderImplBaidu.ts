/**
* name 
*/
module FatLayaHelper{
	export class GameRecorderImplBaidu extends GameRecorderImplBase{
		constructor(){
            super();
		}

		public start(duration: number): void
		{

		}

		stop(): void
		{

		}

		pause(): void
		{

		}

		resume(): void
		{

		}

		clip(before: number, after: number): void
		{

		}

		share(successHandler: Laya.Handler, failedHandler: Laya.Handler):void
		{
			failedHandler && failedHandler.run();
		}
	}
}