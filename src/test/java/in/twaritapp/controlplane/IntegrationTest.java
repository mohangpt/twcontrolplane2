package in.twaritapp.controlplane;

import in.twaritapp.controlplane.config.AsyncSyncConfiguration;
import in.twaritapp.controlplane.config.EmbeddedKafka;
import in.twaritapp.controlplane.config.EmbeddedSQL;
import in.twaritapp.controlplane.config.JacksonConfiguration;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Base composite annotation for integration tests.
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@SpringBootTest(classes = { Twcontrolplane2App.class, JacksonConfiguration.class, AsyncSyncConfiguration.class })
@EmbeddedSQL
@EmbeddedKafka
public @interface IntegrationTest {
}
