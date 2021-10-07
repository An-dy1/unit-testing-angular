import { MessageService } from './message.service';

describe('MessageService', () => {
  // define message service variable
  let service: MessageService;

  beforeEach(() => {});

  it('should have no messages to start', () => {
    // initialize message service
    service = new MessageService();

    expect(service.messages.length).toBe(0);
  });

  it('should add a message when add is called', () => {
    // initialize message service
    service = new MessageService();
    service.add('message1');

    expect(service.messages.length).toBe(1);
  });

  it('should be empty when clear is called', () => {
    // initialize message service
    service = new MessageService();
    service.add('message1');

    service.clear();

    expect(service.messages.length).toBe(0);
  });
});
